document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').substr(1);
            loadContent(page);
        });
    });

    function loadContent(page) {
        switch(page) {
            case 'home':
                content.innerHTML = `
                    <h2>欢迎来到学生会网站</h2>
                    <p>这里是学生会的官方网站，您可以在这里了解到最新的校园动态、活动信息以及各部门的工作内容。</p>
                    <p>我们致力于为全体学生提供优质的服务，促进校园文化建设，丰富学生生活。</p>
                `;
                break;
            case 'news':
                content.innerHTML = `
                    <h2>新闻公告</h2>
                    <ul>
                        <li>
                            <h3>2023年学生会换届选举即将开始</h3>
                            <p>日期：2023年5月15日</p>
                            <p>详情：本年度学生会换届选举将于下月初开始，欢迎有志同学积极参与...</p>
                        </li>
                        <li>
                            <h3>校园文化节圆满结束</h3>
                            <p>日期：2023年4月30日</p>
                            <p>详情：为期一周的校园文化节已圆满结束，感谢全体师生的积极参与...</p>
                        </li>
                    </ul>
                `;
                break;
            case 'events':
                content.innerHTML = `
                    <h2>活动安排</h2>
                    <ul>
                        <li>
                            <h3>五四青年节主题演讲比赛</h3>
                            <p>日期：2023年5月4日</p>
                            <p>地点：学校大礼堂</p>
                            <p>详情：为纪念五四运动，弘扬爱国精神，学生会将举办主题演讲比赛...</p>
                        </li>
                        <li>
                            <h3>春季运动会</h3>
                            <p>日期：2023年5月20日-21日</p>
                            <p>地点：学校操��</p>
                            <p>详情：一年一度的春季运动会即将开始，欢迎同学们踊跃报名参加...</p>
                        </li>
                    </ul>
                `;
                break;
            case 'departments':
                content.innerHTML = `
                    <h2>部门介绍</h2>
                    <ul>
                        <li>
                            <h3>学习部</h3>
                            <p>负责组织学术讲座、学习经验交流会等活动，促进校园学习氛围。</p>
                        </li>
                        <li>
                            <h3>文艺部</h3>
                            <p>负责策划和组织各类文艺活动，丰富校园文化生活。</p>
                        </li>
                        <li>
                            <h3>体育部</h3>
                            <p>负责组织各类体育比赛和活动，促进同学们的身心健康。</p>
                        </li>
                        <li>
                            <h3>外联部</h3>
                            <p>负责与其他学校、社会团体的交流与合作，拓展学生会的对外影响力。</p>
                        </li>
                    </ul>
                `;
                break;
            case 'contact':
                content.innerHTML = `
                    <h2>联系我们</h2>
                    <p>学生会办公室地址：学生活动中心201室</p>
                    <p>联系电话：123-4567-8900</p>
                    <p>电子邮箱：studentunion@example.com</p>
                    <p>微信公众号：ExampleStudentUnion</p>
                    <p>工作时间：周一至周五 9:00-17:00</p>
                `;
                break;
        }
    }

    // 默认加载首页内容
    loadContent('home');
});