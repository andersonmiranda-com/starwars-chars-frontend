import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Header from "../components/Header";

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
  if (loading) return <p>Loading</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      <Header />
      <main className="d-flex align-items-center">
        <div className="container align-items-center">
          <h2 className="mb-4">{data.character.name}</h2>
          <table className="table mt-4">
            <tbody>
              <tr>
                <td className="font-weight-bold">Planet</td>
                <td>{data.character.homeworld}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Birth Year</td>
                <td>{data.character.birth_year}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Height</td>
                <td>{data.character.height}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Mass</td>
                <td>{data.character.mass}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Gender</td>
                <td>{data.character.gender}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Hair Color</td>
                <td>{data.character.hair_color}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Skin Color</td>
                <td>{data.character.skin_color}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Eye Color</td>
                <td>{data.character.eye_color}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Films</td>
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
            className="btn btn-info btn-sm pull-left"
            href="/characters"
          >
            Back
          </a>
        </div>
      </main>
    </>
  );
}

export default CharacterPage;
