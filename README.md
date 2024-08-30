# 合同中台

这个项目是通过 [Create React App](https://github.com/facebook/create-react-app) 创建的，UI使用[material-ui](https://mui.com/material-ui) 搭建。

## 执行步骤

在项目目录中，你可以运行以下脚本：
1. 安装依赖：

    ```bash
    npm install
    ```

2. 启动开发服务器：

    ```bash
    npm run start
    ```

3. 访问项目：

    打开浏览器并访问 [http://localhost:9300](http://localhost:9300)。

4. 部署生产时打包：

    ```bash
    npm run build
    ```
    将应用程序构建到 `build` 文件夹中，用于生产环境。  
    它会以生产模式正确捆绑 React，并优化构建以获得最佳性能。
    构建将被缩小，并且文件名将包含哈希值。  
    你的应用程序已准备好部署！


## 项目结构

### src/components

此目录包含了自定义的公用组件，这些组件旨在在开发中直接使用。修改这里的组件可能会影响整个系统的功能，因此请谨慎修改。

### src/@core

这是系统的基础组件目录。一般情况下，无需对此目录进行修改，除非您确切知道您正在做什么。

### src/pages

在这个目录下，您会找到每个页面的文件。请注意，这里应该仅包含页面级别的组件，而不应该出现非页面的组件。

### src/tools

这是系统的工具方法目录，您可以自由地添加工具方法以满足项目的需求。
