import React from 'react';
import { ReactComponent as HTMLIcon } from './../../assets/icons/html.svg';
import { ReactComponent as CSSIcon } from './../../assets/icons/css.svg';
import { ReactComponent as JSIcon } from './../../assets/icons/javascript.svg';
import { ReactComponent as ReactIcon } from './../../assets/icons/react.svg';
import { ReactComponent as ReduxIcon } from './../../assets/icons/redux.svg';
import { ReactComponent as BootstrapIcon } from './../../assets/icons/bootstrap.svg';
import { ReactComponent as TailwindCSSIcon } from './../../assets/icons/tailwindcss.svg';
import { ReactComponent as PHPIcon } from './../../assets/icons/php.svg';
import { ReactComponent as NodeIcon } from './../../assets/icons/nodejs.svg';
import { ReactComponent as ExpressIcon } from './../../assets/icons/express.svg';
import { ReactComponent as MongoDBIcon } from './../../assets/icons/mongodb.svg';
import { ReactComponent as VSCodeIcon } from './../../assets/icons/vscode.svg';
import { ReactComponent as GitIcon } from './../../assets/icons/git.svg';
import { ReactComponent as AdobeXDIcon } from './../../assets/icons/adobexd.svg';
import { ReactComponent as PostmanIcon } from './../../assets/icons/postman.svg';

const ListItem = ({ name }) => {
  const checkNameIcon = (name) => {
    switch (name) {
      case 'HTML':
        return <HTMLIcon className="mx-auto" width={65} height={65} />;
      case 'CSS':
        return <CSSIcon className="mx-auto" width={65} height={65} />;
      case 'Javascript':
        return <JSIcon className="mx-auto" width={65} height={65} />;
      case 'React':
        return <ReactIcon className="mx-auto" width={65} height={65} />;
      case 'Redux':
        return <ReduxIcon className="mx-auto" width={65} height={65} />;
      case 'Bootstrap':
        return <BootstrapIcon className="mx-auto" width={65} height={65} />;
      case 'TailwindCSS':
        return <TailwindCSSIcon className="mx-auto" width={65} height={65} />;
      case 'PHP':
        return <PHPIcon className="mx-auto" width={65} height={65} />;
      case 'MongoDB':
        return <MongoDBIcon className="mx-auto" width={65} height={65} />;
      case 'Node.js':
        return <NodeIcon className="mx-auto" width={65} height={65} />;
      case 'Express':
        return <ExpressIcon className="mx-auto" width={65} height={65} />;
      case 'VSCode':
        return <VSCodeIcon className="mx-auto" width={65} height={65} />;
      case 'Git':
        return <GitIcon className="mx-auto" width={65} height={65} />;
      case 'AdobeXD':
        return <AdobeXDIcon className="mx-auto" width={65} height={65} />;
      case 'Postman':
        return <PostmanIcon className="mx-auto" width={65} height={65} />;
      default:
        return <HTMLIcon className="mx-auto" width={65} height={65} />;
    }
  };

  return (
    <li className="text-center">
      {checkNameIcon(name)}
      <p className="mt-10">{name}</p>
    </li>
  );
};

export default ListItem;
