const TreeFactory = () => {
  const tree: any = [];

  // const createNode = (node: any) => ({ children: node });

  // const createElement = () => {

  // }

  // const addNode = (node: any, line: number) => {
  //   if (typeof node.children === "string") {
  //     tree[line] = [...tree[line], node];
  //   }else {

  //   }
  // };

  const getTree = () => tree;

  return {
    getTree,
  };
};
