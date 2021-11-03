import DockerAngular from "../assets/images/articles/docker_angular.png";
import LinuxServer from "../assets/images/articles/linux_server.png";
import DockerDotnet from "../assets/images/articles/docker_dotnet_core.jpeg";
import NodeOnLinux from "../assets/images/articles/node_linux.jpeg";
import DockerNode from "../assets/images/articles/docker_node.jpeg";
import DockerReact from "../assets/images/articles/docker_react.png";
import DockerVue from "../assets/images/articles/docker_vue.png";
import ElementaryDocker from "../assets/images/articles/elementary_docker.jpeg";

export const whatsappNumber = "5561985891092"; 

export interface Post {
    id: string;
    image: string;
    title: string;
    impression: string;
}

export const posts: Post[] = [
    {
        id: "how_to_create_a_docker_for_your_angular_project",
        image: DockerAngular,
        title: "Angular on Docker",
        impression: "Multi staging build using Node + Nginx images",
    },
    {
        id: "how_to_setup_you_linux_server",
        image: LinuxServer,
        title: "Setting up Server linux",
        impression: "How I use Digital Ocean to serve all my applications",
    },
    {
        id: "how_to_create_a_docker_for_your_dotnet_project",
        image: DockerDotnet,
        title: "Dotnet core WebApi on Docker",
        impression: "How to setup your dotnet web api on a docker alpine container",
    },
    {
        id: "how_to_install_node_on_linux",
        image: NodeOnLinux,
        title: "Install node on Linux",
        impression: "Installing newest versions of node on linux using node source code",
    },
    {
        id: "how_to_create_a_docker_for_your_node_project",
        image: DockerNode,
        title: "Node published on Docker container",
        impression: "Using docker to publish your node project",
    },
    {
        id: "how_to_create_a_docker_for_your_react_project",
        image: DockerReact,
        title: "React Served on Nginx Container",
        impression: "How to setup Nginx alpine container to your React project",
    },
    {
        id: "how_to_create_a_docker_for_your_vue_project",
        image: DockerVue,
        title: "Vue JS plus Docker",
        impression: "Vue JS project served using Nginx container",
    },
    {
        id: "how_to_install_docker_on_elementary_os",
        image: ElementaryDocker,
        title: "Docker on Elementary",
        impression: "Elementary OS is a cool distro but doesn't have the docs to install docker",
    },
];