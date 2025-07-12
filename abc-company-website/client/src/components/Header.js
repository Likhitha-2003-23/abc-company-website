import React, { useEffect, useState } from 'react';
import api from '../api';

const Header = () => {
  const [heading, setHeading] = useState('Loading...');

  useEffect(() => {
    api.get('/')
       .then(res => setHeading(res.data.text))
       .catch(() => setHeading('Error loading heading'));
  }, []);

  return <h1 className="text-4xl font-bold text-center p-4">{heading}</h1>;
};

export default Header;