import ree from "reejs";
if (ree.canRun){
    let server = ree.server;
    globalThis.ree = ree.server.polyfills;
    server.listen(parseInt(process.argv[2]) || 3000);
}