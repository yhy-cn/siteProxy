import {request} from "umi"

//bing壁纸
export const getBingWallpaper=async()=>{
    const res=await request('/wallpaper?format=js&idx=0&n=1&mkt=zh-CN');
    console.log('reds',res)
    return res;
}