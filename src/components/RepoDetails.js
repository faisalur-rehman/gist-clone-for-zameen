import React from "react";
import "../App.css";
import { IoLogoHtml5 as HTML } from "react-icons/io";
import { SiJavascript as Javascript } from "react-icons/si";
import { SiJava as Java } from "react-icons/si";
import { SiTypescript as Typescript } from "react-icons/si";
import { SiCsharp as Csharp } from "react-icons/si";
import { CgCPlusPlus as CPlus } from "react-icons/cg";
import { SiC as C } from "react-icons/si";
import { SiPython as Python } from "react-icons/si";
import { SiRuby as Ruby } from "react-icons/si";
import { SiRust as Rust } from "react-icons/si";
import { AiFillFolder } from "react-icons/ai";
import { SiSwift as Swift } from "react-icons/si";
import { SiPhp as PHP } from "react-icons/si";
import { SiKotlin as Kotlin } from "react-icons/si";

const RepoDetails = ({ forkUsers }) => {
  const checkLanguage = (array) => {
    if (array.includes("HTML")) {
      return <HTML />;
    } else if (array.includes("JavaScript")) {
      return <Javascript />;
    } else if (array.includes("TypeScript")) {
      return <Typescript />;
    } else if (array.includes("Java")) {
      return <Java />;
    } else if (array.includes("C#")) {
      return <Csharp />;
    } else if (array.includes("C++")) {
      return <CPlus />;
    } else if (array.includes("C")) {
      return <C />;
    } else if (array.includes("Python")) {
      return <Python />;
    } else if (array.includes("Ruby")) {
      return <Ruby />;
    } else if (array.includes("Rust")) {
      return <Rust />;
    } else if (array.includes("Swift")) {
      return <Swift />;
    } else if (array.includes("Kotlin")) {
      return <Kotlin />;
    } else if (array.includes("PHP")) {
      return <PHP />;
    } else {
      return <AiFillFolder />;
    }
  };
  return (
    <tbody>
      <tr>
        <th> Badge</th>
        <th>Gists Id</th>
        <th>Forked By</th>
      </tr>
      {forkUsers.map((repo) => (
        <tr key={repo.repoId}>
          <td>{checkLanguage(repo.language)}</td>
          <td>{repo.repoId}</td>
          <td>
            {repo.userData.length > 0
              ? repo.userData
                  .slice(0, 3)
                  .map((user, i) => <p key={i}>{user.owner.login}</p>)
              : "No one forked this."}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RepoDetails;
