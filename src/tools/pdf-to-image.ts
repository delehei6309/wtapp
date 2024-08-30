/**
 * pdf转图片
 * @param url pdf文件地址
 * @param scale 缩放比例
 * @returns {Promise<any[]>} 图片数组
 */
let pdfjsLib: any = null;
let pdfjsable: boolean = true;
try {
    // @ts-ignore
    pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf-dist/pdf.worker.min.js';
} catch (e) {
    console.log(e);
    pdfjsable = false;
}

export default async (url: string, scale: number = 1, base64: boolean = false) => {
    if (!pdfjsable) throw new Error('无法把pdf转换为image');
    const imageItems = [];
    const loadingTask = pdfjsLib.getDocument(url);
    const pdfDocument = await loadingTask.promise;
    const numPages = pdfDocument.numPages; //pdf 页数
    for (let i = 1; i <= numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };
        await page.render(renderContext).promise;
        if(base64){
            // 添加img元素到array中
            imageItems.push(canvas.toDataURL()); // 输出的为base64
        }else{
            // // 添加canvas元素到array中
            imageItems.push(canvas); // 输出的为canvas
        }
    }
    return imageItems;
};