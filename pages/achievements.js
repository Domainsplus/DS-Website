import PropTypes from "prop-types";
import Header from "../components/header";
import styles from "../styles/grid.module.css";
import Head from "next/head";
import Footer from "../components/footer";
import data from "../data/achievements/achievements.json";

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const FacultyPage = () => (
  <div className="text-gray-100">
    <Head>
      <title>Achievements | Domain Square +</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/d2s-logo.png" />
    </Head>
    <Header />
    <div className="achievements text-gray-100 my-12 sm:mt-4 mt-20 sm:px-16 px-10">
      <h1 className="about text-center sm:text-6xl text-5xl font-semibold mb-16">
        Achievements
      </h1>
      <table className="table">
        <tbody className="table-body">
          <tr className="table-heading text-2xl">
            <th>Year</th>
            <th>Symposium</th>
            <th>Position</th>
          </tr>
        {data.map((achievement) => (
          <tr key={achievement.eventName} className='table-content text-lg border-gray-900'>
            <td className="table-components text-center border-gray-900">{achievement.year}</td>
            <td className="table-components text-center border-gray-900">{achievement.symposium}</td>
            <td className="table-components text-center border-gray-900">
              <strong>{achievement.position}</strong>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div className="bottom-0 w-full">
      <Footer />
    </div>
  </div>
);

export default FacultyPage;
