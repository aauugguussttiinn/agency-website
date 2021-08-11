import React, { useParams, useState, useEffect } from 'react';
import works from 'data/works';

const Work = () => {

  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined)

  useEffect(() => {
    const findWork = works.find((work) => work.slug === workSlug);
    setCurrentWork(findWork);
  }, [workSlug])

  return (
    <div>
      Je suis dans le work slug
      { currentWork }
    </div>
  );
};

export default Work;