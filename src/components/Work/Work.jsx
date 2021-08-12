import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import works from 'data/works';
import Header from 'components/Header/Header';


const Work = () => {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState([])
  const { description, title } = currentWork

  useEffect(() => {
    const findWork = works.find((work) => work.slug === workSlug);
    setCurrentWork(findWork);
  }, [workSlug])

  return (
    <>
      <Header />
      <div className="work">
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    </>
  );
};

export default Work;