import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//`root` という名前の空箱をHTMLから探して、  その箱の中に `App` 画面を表示する。  そのとき安全チェック用の `StrictMode` で囲んで表示する。

//このファイルはreactの起動となる
//必要なものを読み込む（import） App をHTMLの #root に表示する（render）

