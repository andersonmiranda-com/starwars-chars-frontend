import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Header from "../../components/Header";
import Loading from "../../components/Loading";

import "./index.scss";

export const CHARACTER_DATA = gql`
  fragment CharsTile on Character {
    __typename
    id
    name
    gender
    birth_year
  }
`;

export const GET_CHARACTERS = gql`
  query charactersList($page: Int) {
    charactersList(page: $page) {
      next
      previous
      characters {
        ...CharsTile
      }
    }
  }
  ${CHARACTER_DATA}
`;

function CharactersListPage() {
  const { data, loading, error, fetchMore } = useQuery(GET_CHARACTERS);

  if (error) return <p>ERROR</p>;

  return (
    <>
      <Header />

      <main className="row back-image2 text-center h-100">
        {data ? (
          <content>
            <h1 className="char-title">Star Wars Characters</h1>
            <table className="table mt-4">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Birth Year</th>
                </tr>
              </thead>
              <tbody>
                {data.charactersList &&
                  data.charactersList.characters &&
                  data.charactersList.characters.map((char) => (
                    <tr key={char.id}>
                      <td>
                        <Link to={`/character/${char.id}`}>{char.name}</Link>
                      </td>
                      <td>{char.gender}</td>
                      <td>{char.birth_year}</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <td colspan="3">
                  <button
                    className="btn btn-danger btn-sm float-left"
                    disabled={
                      !(data.charactersList && data.charactersList.previous)
                    }
                    onClick={async () => {
                      await fetchMore({
                        variables: {
                          page: parseInt(data.charactersList.previous),
                        },
                      });
                    }}
                  >
                    Previous
                  </button>

                  <button
                    className="btn btn-danger btn-sm float-right"
                    disabled={
                      !(data.charactersList && data.charactersList.next)
                    }
                    onClick={async () => {
                      await fetchMore({
                        variables: {
                          page: parseInt(data.charactersList.next),
                        },
                      });
                    }}
                  >
                    Next
                  </button>
                </td>
              </tfoot>
            </table>
          </content>
        ) : (
          <Loading display={loading} />
        )}
      </main>
    </>
  );
}

export default CharactersListPage;
