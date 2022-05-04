import React,{useState,useEffect} from 'react'
import styles from './index.less';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {getBingWallpaper} from "../../utils/api"
import Search from "@/components/Search"
import SiteList from "@/components/SiteList"

export default function HomePage() {
  const [Wallpaper, setWallpaper] = useState('')
  useEffect(() => {
    getWallpaper()
  })

  const getWallpaper = async () => {
    const res = await getBingWallpaper()
    setWallpaper(res.images[0].url.split('&')[0])
  }
  return (
    <div className={styles.homePage}>
      <div className={styles.header}>
        <Header />
        </div>
      <div className={styles.body} style={{backgroundImage:`url(http://cn.bing.com/${Wallpaper})`}}>
        
        <div className={styles.search}><Search /></div>
        <div className={styles.sitelist}>
        <SiteList />
        <SiteList />
        </div>
      </div>
      <div className={styles.fotter}>
        <Footer />
        </div>
    </div>
  );
}
