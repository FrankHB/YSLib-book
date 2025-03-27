// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Home.html"><strong aria-hidden="true">1.</strong> 索引/Index</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Home.en-US.html"><strong aria-hidden="true">1.1.</strong> English Version</a></li><li class="chapter-item expanded "><a href="Home.zh-CN.html"><strong aria-hidden="true">1.2.</strong> 简体中文版</a></li><li class="chapter-item expanded "><a href="Contents.zh-CN.html"><strong aria-hidden="true">1.3.</strong> Contents(zh-CN)/主题目录</a></li></ol></li><li class="chapter-item expanded "><a href="GettingStarted.zh-CN.html"><strong aria-hidden="true">2.</strong> 入门</a></li><li class="chapter-item expanded "><a href="Development.zh-CN.html"><strong aria-hidden="true">3.</strong> 开发说明</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Prerequisitions.zh-CN.html"><strong aria-hidden="true">3.1.</strong> 先决条件</a></li><li class="chapter-item expanded "><a href="GettingSources.zh-CN.html"><strong aria-hidden="true">3.2.</strong> 获取源代码</a></li><li class="chapter-item expanded "><a href="Build.zh-CN.html"><strong aria-hidden="true">3.3.</strong> 构建</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="BuildDocumentation.zh-CN.html"><strong aria-hidden="true">3.3.1.</strong> 构建文档</a></li></ol></li><li class="chapter-item expanded "><a href="Test.zh-CN.html"><strong aria-hidden="true">3.4.</strong> 测试</a></li><li class="chapter-item expanded "><a href="Run.zh-CN.html"><strong aria-hidden="true">3.5.</strong> 运行</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DeSmuME.en-US.html"><strong aria-hidden="true">3.5.1.</strong> DeSmuME</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="Features.zh-CN.html"><strong aria-hidden="true">4.</strong> 结构和特性</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ProjectDependencies.zh-CN.html"><strong aria-hidden="true">4.1.</strong> （内部）项目依赖性说明</a></li><li class="chapter-item expanded "><a href="Features/NPL.zh-CN.html"><strong aria-hidden="true">4.2.</strong> NPL</a></li></ol></li><li class="chapter-item expanded "><a href="EMPTY.html"><strong aria-hidden="true">5.</strong> 应用开发环境</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sysroot.zh-CN.html"><strong aria-hidden="true">5.1.</strong> Sysroot</a></li><li class="chapter-item expanded "><a href="YDE.zh-CN.html"><strong aria-hidden="true">5.2.</strong> YDE</a></li></ol></li><li class="chapter-item expanded "><a href="EMPTY.html"><strong aria-hidden="true">6.</strong> 项目维护资源</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Releases.zh-CN.html"><strong aria-hidden="true">6.1.</strong> 发布工程</a></li><li class="chapter-item expanded "><a href="Archives.zh-CN.html"><strong aria-hidden="true">6.2.</strong> 归档</a></li></ol></li><li class="chapter-item expanded "><a href="EMPTY.html"><strong aria-hidden="true">7.</strong> 工具</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Tools/SHBuild.zh-CN.html"><strong aria-hidden="true">7.1.</strong> SHBuild</a></li><li class="chapter-item expanded "><a href="Tools/RevisionPatcher.zh-CN.html"><strong aria-hidden="true">7.2.</strong> RevisionPatcher</a></li><li class="chapter-item expanded "><a href="Tools/SXML2XML.zh-CN.html"><strong aria-hidden="true">7.3.</strong> SXML2XML</a></li><li class="chapter-item expanded "><a href="Tools/ProjectGenerator.zh-CN.html"><strong aria-hidden="true">7.4.</strong> ProjectGenerator</a></li><li class="chapter-item expanded "><a href="Tools/Scripts.zh-CN.html"><strong aria-hidden="true">7.5.</strong> 脚本</a></li></ol></li><li class="chapter-item expanded "><a href="Tutorial.zh-CN.html"><strong aria-hidden="true">8.</strong> 教程</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Tutorial/Overview.zh-CN.html"><strong aria-hidden="true">8.1.</strong> 综述</a></li><li class="chapter-item expanded "><a href="Tutorial/GUI.zh-CN.html"><strong aria-hidden="true">8.2.</strong> GUI</a></li><li class="chapter-item expanded "><a href="Tutorial/Configuration.zh-CN.html"><strong aria-hidden="true">8.3.</strong> 程序配置</a></li></ol></li><li class="chapter-item expanded "><a href="EMPTY.html"><strong aria-hidden="true">9.</strong> 附录/Appendix</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Terminology.zh-CN.html"><strong aria-hidden="true">9.1.</strong> 术语概要</a></li><li class="chapter-item expanded "><a href="StandardUsing.en-US.html"><strong aria-hidden="true">9.2.</strong> Standard Using</a></li><li class="chapter-item expanded "><a href="ReportedIssues.en-US.html"><strong aria-hidden="true">9.3.</strong> Reported Issues</a></li><li class="chapter-item expanded "><a href="WikiRules.en-US.html"><strong aria-hidden="true">9.4.</strong> Wiki Rules</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
