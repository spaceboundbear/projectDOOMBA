import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiApollographql,
} from 'react-icons/si';
import React from 'react';

const Technologies = [
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
  },
  {
    id: 2,
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    id: 3,
    name: 'SocketIO',
    icon: <SiSocketdotio />,
  },

  {
    id: 4,
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    id: 5,
    name: 'Apollo',
    icon: <SiApollographql />,
  },

  {
    id: 6,
    name: 'NodeJS',
    icon: <FaNodeJs />,
  },

  {
    id: 8,
    name: 'Express',
    icon: <SiExpress />,
  },
];

export default Technologies;
