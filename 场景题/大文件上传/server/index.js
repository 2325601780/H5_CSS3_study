import http from 'http'
import multiparty from 'multiparty'
import path,{dirname} from 'path'
import fs from 'fs-extra'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)   // 获取当前文件的绝对路径
const __dirname = dirname(__filename)   // 获取当前文件所在目录的绝对路径

const server = http.createServer(async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")
    if(req.method === 'OPTIONS'){   // 处理预检请求
        res.end()
        return
    }
    if(req.url === '/upload'){
        const form = new multiparty.Form()
        form.parse(req,(err,fields,files)=>{
            const [file] = files.file
            const [fileName] = fields.fileName
            const [chunkName] = fields.chunkName

            const chunkDir = path.resolve(__dirname,'./chunks',`${fileName}--chunks`)
            if(!fs.existsSync(chunkDir)){
                fs.mkdirsSync(chunkDir)
            }
            fs.moveSync(file.path,path.resolve(chunkDir,chunkName),{ overwrite: true }) // 移动文件到指定目录，同名覆盖（支持重传）

            res.end(JSON.stringify({code:200,msg:'success'}))
        })
    }

    if(req.url === '/merge'){
        const {fileName,size} = await resolvePost(req)
        const filePath = path.resolve(__dirname,'./chunks',`${fileName}--chunks`)

        await mergeChunks(filePath,fileName,size)
        res.end(JSON.stringify({code:200,msg:'success'}))
    }
})

const resolvePost = (req) => {
    return new Promise((resolve,reject) => {
        let chunk = ''
        req.on('data',(data) => {
            chunk += data
        })
        req.on('end',() => {
            resolve(JSON.parse(chunk))
        })
    })
}

const mergeChunks = async (filePath,fileName,size) => {
    //创建流式空间，将切片处理成流式资源写入到空间中，再将空间中的资源合并成一个文件
    let chunksPath = fs.readdirSync(filePath)
    chunksPath.sort((a,b)=>{
        return a.split('-')[a.split('-').length-1] - b.split('-')[b.split('-').length-1]
    })
    const arr = chunksPath.map((chunkPath,index)=>{
        const chunk_path = path.resolve(filePath,chunkPath)
        const writeStream = fs.createWriteStream(path.resolve(filePath,fileName),{
            start: index * size,
            end: (index + 1) * size,
        })

        return pipeStream(chunk_path,writeStream)
    })
    await Promise.all(arr)
}

const pipeStream = (chunk_path,writeStream) => {
    return new Promise((resolve,reject) => {
        const readStream = fs.createReadStream(chunk_path)
        readStream.pipe(writeStream)
        readStream.on('end',() => {
            fs.unlinkSync(chunk_path)
            resolve()
        })
    })
}

server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})
