import React from 'react'
import styles from "./components.less"

interface Props{

}
const Footer:React.FC<Props> = () => {
  return (
    <div className={styles.footer}>
      <div>The content of this site comes from the Internet. If the content infringes your rights, please contact to delete the relevant content. Contact email: netptop@gmail.com</div>
      <div>Copyright © 2022 siteproxy代理 All Rights Reserved</div>
    </div>
  )
}

export default Footer