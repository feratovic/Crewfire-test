import {useContext} from 'react';
import {Card, Filter, Layout, Loader} from '../components';
import {PublicContext} from '../context/PublicContext';

function App() {
  const {data, grid, allData, loadMore} = useContext(PublicContext);

  return (
    <Layout>
      <Filter />
      <div className={`mx-3 pb-4 ${grid && 'grid gap-4 grid-cols-3'}`}>
        {data ? (
          data.map((post, index) => (
            <Card
              key={post && post.id && `${post.id.text}_${index}`}
              {...post}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      {data && allData && allData.length > data.length && (
        <div className="text-center">
          <button
            name="Load more"
            onClick={loadMore}
            type="submit"
            className="bg-[#106BD9] p-4 px-[60px] m-4 rounded-3xl font-bold text-[#EBEBEB] hover:opacity-75"
          >
            Load more
          </button>
        </div>
      )}
    </Layout>
  );
}

export default App;
