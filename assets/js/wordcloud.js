if(WordCloud.isSupported){var wordcloud=document.getElementById("wordcloud");var data=[["JAVA",16],["SpringBoot",10],["Redis",12],["Webflux",8],["SpringCloud",8],["Dubbo",10],["全文搜索引擎",8],["Elasticsearch",10],["彈性伸縮",6],["容器化",8],["VSCode",6],["IDEA",6],["Youtube",6],["instagram",6],["twitter",6],["Git",6],["Jira",6],["超频",6],["BIOS",6],["Jpa",6],["Tomcat",6],["圖數據庫",6],["負載均衡",6],["微服務",8],["Maven",6],["Quartz",6],["Google",6],["配置中心",6],["Eureka",6],["RTX2080ti",6],["StackOverflow",6],["NIO",6],["Feign",6],["高可用",6],["自由世界",6],["沙盒游戲",6],["Z390",6],["I7 8086K",6],["分體式水冷",6],["Forever24",8],["Mamba Never Out!",6],["單板滑雪",6],["vlog",6],["數據結構",6],["算法",6],["設計模式",6],["TCP",6],["宅男",6],["科幻",6],["Twitch",6],["nintendo",6],["消息隊列",6],["Steam",6],["動漫",6],["3C",6],["時事新聞",6],["主機游戲",6],["手辦",6],["LEGO",6],["PC外設",6],["Coldplay",6],["ArangoDB",6],["Markdown",6],["solr",6],["軟路由",6],["洛聖都",6],["Edward Sonwden",6],["Post Malone",6],["GE66",6],["GTAV",6],["Watch Dog 2",6],["數據分析",6],["可視化",6],["Github",6],["Jenkins",6],["DevOps",6],["websocket",8],["shadowsocks",6],["異步非阻塞",8],["多綫程",8],["程序員",8],["Shell",6],["Nacos",6],["Zookeeper",6],["Centos",6],["Hadoop",6],["vue",4],["docker-compose",6],["undertow",4],["echarts",4],["Netty",6],["分佈式",6],["MongoDB",4],["Neo4j",4],["VMware",4],["Linux",6],["Mysql",8],["性能監控",8],["Python",4],["Scrapy",6],["PHP",4],["C#",4],["JavaScript",6],["CSS",6],["HTML",6],["RPC",8],["Docker",8],["Kubernetes",6],["Kibana",6],["Prometheus",6],["Grafana",6],["Kafka",6]];var options=eval({list:data,weightFactor:2,fontFamily:'"Raleway", Helvetica, sans-serif',drawOutOfBound:false,shrinkToFit:true,color:function(word,weight){return weight===16?"#f02222":"rgba(215, 40, 40, 0.7)"},rotateRatio:.5,rotationSteps:2,backgroundColor:"#0000"});WordCloud(wordcloud,options)}else{console.log("浏览器不支持 wordcloud2")}