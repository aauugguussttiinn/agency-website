import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import works from 'data/works';
import Header from 'components/Header/Header';


const Work = () => {
  console.log('Je vérifie que je rentre bien dans la fonction')
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined)
  console.log('Je vérifie que j arrive à récupérer le bon work')
  console.log(currentWork)
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