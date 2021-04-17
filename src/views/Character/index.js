import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import "./index.scss";

export const CHARACTER_DATA = gql`
  fragment CharsTile on Character {
    __typename
    id
    name
    height
    mass
    gender
    hair_color
    skin_color
    eye_color
    birth_year
    films
    homeworld
  }
`;

export const GET_CHARACTER = gql`
  query character($charId: ID!) {
    character(id: $charId) {
      ...CharsTile
    }
  }
  ${CHARACTER_DATA}
`;

function CharacterPage(props) {
  let { charId } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { charId },
  });

  if (error) return <p>ERROR</p>;

  return (
    <>
      <Header />
      <main className="row back-image2 text-center h-100">
        {data ? (
          <content>
            <h1 className="char-title mb-4">{data.character.name}</h1>
            <table className="table mt-4">
              <tbody>
                <tr>
                  <td className="char-label">Planet</td>
                  <td>{data.character.homeworld}</td>
                </tr>
                <tr>
                  <td className="char-label">Birth Year</td>
                  <td>{data.character.birth_year}</td>
                </tr>
                <tr>
                  <td className="char-label">Height</td>
                  <td>{data.character.height}</td>
                </tr>
                <tr>
                  <td className="char-label">Mass</td>
                  <td>{data.character.mass}</td>
                </tr>
                <tr>
                  <td className="char-label">Gender</td>
                  <td>{data.character.gender}</td>
                </tr>
                <tr>
                  <td className="char-label">Hair Color</td>
                  <td>{data.character.hair_color}</td>
                </tr>
                <tr>
                  <td className="char-label">Skin Color</td>
                  <td>{data.character.skin_color}</td>
                </tr>
                <tr>
                  <td className="char-label">Eye Color</td>
                  <td>{data.character.eye_color}</td>
                </tr>
                <tr>
                  <td className="char-label">Films</td>
                  <td>
                    {data.character.films.map((film) => {
                      return <p>{film}</p>;
                    })}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <td colspan="2"></td>
              </tfoot>
            </table>

            <a
              type="button"
              className="btn btn-danger btn-sm pull-left"
              href="/characters"
            >
              Back
            </a>
          </content>
        ) : (
          <Loading display={loading} />
        )}
      </main>
    </>
  );
}

export default CharacterPage;
