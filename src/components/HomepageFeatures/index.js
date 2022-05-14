import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import 'gitalk/dist/gitalk.css';
// import GitalkComponent from 'gitalk/dist/gitalk-component';
// const option = {
//   clientID: '5b8f9dd8ee69249cb54f',
//   clientSecret: '2f028418820968718477fd2d234d8d6b8ab3ad5a',
//   repo: 'sev',
//   owner: 'Kiyan-a',
//   admin: ['Kiyan-a'],
//   id: decodeURI(window.location.pathname),

// }
const FeatureList = [
  {
    title: '我的前端',
    Svg: require('@site/static/img/doc.svg').default,
    description: (
      <>
        做好的事情，而不是好做的事情。平时的技术积累，分享交流技术心得，温故而知新，不想多年以后发现自己在这条路上毫无痕迹。
      </>
    ),
  },
  {
    title: '经验分享',
    Svg: require('@site/static/img/cloud-shell-svgrepo-com.svg').default,
    description: (
      <>
        记录自己遇到的且难以解决的问题，并记录解决方案。不断的保持学习，才能一直不断的提升自我，不断进步。没有了学校教授知识，学习变成一件需要主动进行的事。
      </>
    ),
  },
  {
    title: '工具分享',
    Svg: require('@site/static/img/ball-basket-education-football-learning-school-svgrepo-com.svg').default,
    description: (
      <>
        工欲善其事，必先利其器。比如代码开发、美化、格式化、转码、图像处理、数据联调、代码部署、命令行操作等部分，安装相应好用的工具，让开发全流程事半功倍。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      {/* <GitalkComponent
        options={option}
      ></GitalkComponent> */}
    </div>
  );
}
