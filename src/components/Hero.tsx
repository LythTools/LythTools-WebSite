export function Hero() {
  return (
    <section className="hero" role="banner">
      <div className="hero__toolbar">
        <a 
          className="theme-toggle github-link" 
          href="https://github.com/LythTools/LythTools-WebSite" 
          target="_blank" 
          rel="noopener noreferrer"
          title="查看 GitHub 仓库"
          aria-label="查看 GitHub 仓库"
        >
          <i className="icon ri-github-line" aria-hidden></i>
        </a>
        <input
          id="themeToggle"
          className="theme-toggle-input"
          type="checkbox"
          aria-label="切换明暗模式"
          onChange={() => {
            const el = document.getElementById('themeToggle') as HTMLInputElement | null
            el?.closest('.hero')?.classList.toggle('hero--light', !!el?.checked)
          }}
        />
        <label className="theme-toggle" htmlFor="themeToggle" title="切换明暗模式">
          <i className="icon ri-moon-line" aria-hidden></i>
          <i className="icon ri-sun-line" aria-hidden></i>
        </label>
      </div>
      <div className="hero__decor" aria-hidden>
        <div className="glow glow--1" />
        <div className="glow glow--2" />
        <div className="gridlines" />
      </div>
      <div className="search-container">
        <div className="hero__grid">
          {/* Hero 介绍 */}
          <div className="hero__content">
            <span className="hero__eyebrow">LythTools · 效率工具</span>
            <h1 className="hero__title">
              让开发更轻，<strong>效率更高</strong>
            </h1>
            <p className="hero__subtitle">
              LythTools 集成多功能跨平台效率工具，Utools的优质开源替代品，开发者和设计师的利器。
              当前为软件内部测试阶段，欢迎您的使用与反馈。正式版发布敬请期待！
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#" aria-label="下载 LythTools">
                下载软件
              </a>
              <a className="btn btn--ghost" href="#" aria-label="了解 LythTools 功能">
                快速开始
              </a>
            </div>
            <div className="hero__pills" aria-hidden>
              <span className="pill">⚡ 文件搜索</span>
              <span className="pill">🧩 扩展商店</span>
              <span className="pill">🤖 大模型集成</span>
              <span className="pill">☁️ 快捷安装</span>
            </div>
          </div>

          {/* 右侧：LythTools 搜索预览 */}
          <div className="search-shell">
            {/* 搜索条 */}
            <div className="search-box" role="search">
              <div className="search-row">
                <div className="logo-wrap">
                  <div className="app-logo" title="打开菜单" role="img" aria-label="LythTools Logo">
                    <svg width="24" height="24" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M126.208 19.4166L29.125 135.917H116.5L106.792 213.583L203.875 97.0833H116.5L126.208 19.4166Z" fill="#8C7AD7"/>
                      <path opacity="0.3" d="M129.287 42.6219L59.6708 119.342H111.054L106.2 177.592L169.304 109.633H120.762L129.287 42.6219Z" fill="#E7E2FF"/>
                      <path d="M126.208 25.5258C130.498 25.5258 133.975 22.0485 133.975 17.7591C133.975 13.4697 130.498 9.99243 126.208 9.99243C121.919 9.99243 118.442 13.4697 118.442 17.7591C118.442 22.0485 121.919 25.5258 126.208 25.5258Z" fill="white"/>
                      <path d="M107.218 220.119C111.507 220.119 114.985 216.641 114.985 212.352C114.985 208.063 111.507 204.585 107.218 204.585C102.928 204.585 99.4512 208.063 99.4512 212.352C99.4512 216.641 102.928 220.119 107.218 220.119Z" fill="white"/>
                      <path opacity="0.8" d="M30.309 141.742C33.5261 141.742 36.134 139.134 36.134 135.917C36.134 132.7 33.5261 130.092 30.309 130.092C27.0919 130.092 24.484 132.7 24.484 135.917C24.484 139.134 27.0919 141.742 30.309 141.742Z" fill="white"/>
                      <path opacity="0.8" d="M202.691 102.908C205.908 102.908 208.516 100.3 208.516 97.0833C208.516 93.8662 205.908 91.2583 202.691 91.2583C199.474 91.2583 196.866 93.8662 196.866 97.0833C196.866 100.3 199.474 102.908 202.691 102.908Z" fill="white"/>
                      <rect x="107.976" y="102.293" width="17.0488" height="28.4146" fill="#D9D9D9"/>
                    </svg>
                  </div>
                </div>
                <input className="search-input-with-logo text-select" type="text" placeholder="搜索应用、文件或执行计算..." />
                <div className="right-hints">
                  <div className="shortcut-hint" title="唤起快捷键">
                    <span className="shortcut-key">Alt</span>
                    <span className="shortcut-plus">+</span>
                    <span className="shortcut-key">Space</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 搜索结果（网格示例） */}
            <div className="results-container">
              <div className="results-grid">
                <div className="result-item selected">
                  <div className="result-icon">🚀</div>
                  <div className="result-content">
                    <div className="result-title">VS Code</div>
                    <div className="result-description">编辑器 / 开发工具</div>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">📝</div>
                  <div className="result-content">
                    <div className="result-title">记事本</div>
                    <div className="result-description">应用程序</div>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">🌐</div>
                  <div className="result-content">
                    <div className="result-title">Chrome</div>
                    <div className="result-description">浏览器</div>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">📄</div>
                  <div className="result-content">
                    <div className="result-title">需求文档.docx</div>
                    <div className="result-description">E:/Work/Docs</div>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">📁</div>
                  <div className="result-content">
                    <div className="result-title">项目文件夹</div>
                    <div className="result-description">E:/Projects/LythTools</div>
                  </div>
                </div>
                <div className="result-item">
                  <div className="result-icon">🧮</div>
                  <div className="result-content">
                    <div className="result-title">计算结果</div>
                    <div className="result-description">2 + 2 = 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


