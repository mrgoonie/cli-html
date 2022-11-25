import tags from '../tags';

export const renderTag = (node, context, defaultTag:any = tags.div) => {
  const tagFunction = tags[node.nodeName || '#text'] || defaultTag;
  const nodeTag = tagFunction(node, context);

  return nodeTag;
};
