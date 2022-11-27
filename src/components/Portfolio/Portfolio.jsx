import portfolio from '../../data/portfolio';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.id}
            imgURL={project.imgURL}
            imgAlt={project.imgAlt}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
};
export default Portfolio;
