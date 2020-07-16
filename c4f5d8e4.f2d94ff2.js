(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),l=a(133),o=a(139),s=a(134),i=a(132),m=a(137),d=a(123),u=a.n(d),g=(a(124),a(229));const p=[{title:c.a.createElement(c.a.Fragment,null,"Fast & Scalable"),imageUrl:"https://fuelcycle.com/wp-content/uploads/2018/12/Fast-Flexible-Connected-01-2-310x300.png",description:c.a.createElement(c.a.Fragment,null,"Cylon uses OpenMPI underneath. It provides core data processing operators many times efficiently than current systems.")},{title:c.a.createElement(c.a.Fragment,null,"Designed to be integrated"),imageUrl:"https://uucss.org/wp-content/uploads/2016/10/operations-council.png",description:c.a.createElement(c.a.Fragment,null,"Cylon is designed to work accross different data processing frameworks, deep learning frameworks and data formats.")}],b=[{title:c.a.createElement(c.a.Fragment,null,"Powered by Apache Arrow"),imageUrl:"https://arrow.apache.org/img/arrow.png",description:c.a.createElement(c.a.Fragment,null,"Cylon uses Apache Arrow underneath to represent data.")}];function f({imageUrl:e,title:t,description:a,fixedWidth:n=!1}){const r=Object(m.a)(e);return c.a.createElement("div",{className:Object(l.a)("col col--4",u.a.feature)},r&&c.a.createElement("div",{className:"text--left"},c.a.createElement("img",{className:n?u.a.featureImageFixedWidth:u.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}t.default=function(){const e=Object(i.a)(),{siteConfig:t={}}=e;return c.a.createElement(o.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:Object(l.a)("hero hero--primary",u.a.heroBanner,"custom-background")},c.a.createElement("div",{className:"container header-container"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:u.a.buttons},c.a.createElement(s.a,{className:Object(l.a)("button button--outline button--secondary button--lg",u.a.getStarted),to:Object(m.a)("docs/")},"Get Started")),c.a.createElement("img",{src:"img/wheel.png",className:"header-img"}))),c.a.createElement("main",null,p&&p.length>0&&c.a.createElement("section",{className:u.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},p.map((e,t)=>c.a.createElement(f,Object(n.a)({key:t},e)))))),b&&b.length>0&&c.a.createElement("section",{className:u.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},b.map((e,t)=>c.a.createElement(f,Object(n.a)({key:t},e,{fixedWidth:!0}))),c.a.createElement("div",{className:Object(l.a)("col col--8",u.a.feature)},c.a.createElement(g.a,{text:"int main(int argc, char *argv[]) {\n  auto mpi_config = new cylon::net::MPIConfig();\n  auto ctx = cylon::CylonContext::InitDistributed(mpi_config);\n\n  std::shared_ptr<cylon::Table> first_table, second_table, joined;\n  auto read_options = cylon::io::config::CSVReadOptions();\n  auto status = cylon::Table::FromCSV(ctx, argv[1], first_table, read_options);\n  status = cylon::Table::FromCSV(ctx, argv[2], second_table, read_options);\n  status = first_table->DistributedJoin(second_table,\n                                        cylon::join::config::JoinConfig::InnerJoin(0, 0),\n                                        &joined);\n  ctx->Finalize();\n  return 0;\n}",language:"cpp",theme:g.b,showLineNumbers:!0,wrapLines:!0})))))))}}}]);