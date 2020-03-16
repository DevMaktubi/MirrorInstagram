import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: #ffe;
`;

export const Post = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  flex: 2;
  height: 1024px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 70px;

  .DivFotos {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      height: 700px;
    }
    .title {
      display: flex;
      flex-direction: row;
      padding: 20px 20px;
      justify-content: space-between;
      align-items: center;
      svg {
        &:hover {
          cursor: pointer;
        }
      }
      .perfilWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #ccc;
          margin-right: 10px;
          &:hover {
            cursor: pointer;
          }
        }
        strong {
          font-size: 20px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .newComment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      width: 100%;
      padding: 10px 30px;
      input {
        border: 0;
        height: 50px;
        width: 100%;
        font-size: 17px;
      }
      strong {
        opacity: 0.3;
        transition: opacity 0.25s, color 0.25s;
        &:hover {
          color: #3282b8;
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
`;
export const PostWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const Widgets = styled.div`
  display: flex;
  flex: 1;
  width: 400px;
  flex-direction: column;
  margin-left: 30px;
  .perfil {
    display: flex;
    align-content: center;
    justify-content: left;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;
      strong {
        @import url('https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap');
        font-size: 22px;
        font-weight: bold;
        color: #323232;
        font-family: 'Baloo Chettan 2', cursive;
      }
    }
  }
  .stories {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    .actions {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 20px;
      padding: 10px 10px 20px 15px;
      strong {
        color: #000;
        &:last-child {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .storiesList {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 5px 5px 0 5px;
      overflow-y: scroll;
    }
  }
  .suggestions {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 360px;
    border: 1px solid #ccc;
    padding: 10px;
    .actions {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 20px;
      padding: 10px 10px 20px 15px;
      p {
        color: #775;
        font-weight: bold;
      }
      strong {
        color: #000;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .suggestionList {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 5px 0 5px;
  }
`;
export const Story = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  margin: 10px 0 5px 10px;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    margin: 0 0 5px 10px;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    padding: 2px;
    border: 2px solid red;
    margin-right: 10px;
  }
  .info {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 20px;
    }
    small {
      font-size: 15px;
      text-transform: uppercase;
      color: #999;
    }
  }
`;

export const Suggestion = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  margin: 10px 0 5px 10px;
  justify-content: space-between;
  &:first-child {
    margin: 0 0 5px 10px;
  }
  > strong {
    color: #0099cc;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 1px;
    border: 1px solid red;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    strong {
      font-size: 18px;
      &:hover {
        cursor: pointer;
      }
    }
    small {
      font-size: 15px;
      text-transform: uppercase;
      color: #999;
    }
  }
  .suggestionWrapper {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1250px;
  margin-top: 30px;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .actions {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    width: 100%;
    height: 70px;
    flex: 1;
    > svg {
      stroke: #000;
      stroke-width: 30px;
      display: flex;
      margin-right: 10px;
      color: #fff;
      cursor: pointer;
      transition: color 0.25s;
      &:hover {
        color: #000;
      }
    }
    .actionWrapper {
      display: flex;
      flex: 1;
      .inverted {
        transform: scale(-1, 1);
      }
      svg {
        color: #fff;
        stroke: #000;
        stroke-width: 30px;
        display: flex;
        width: 7%;
        margin: auto 7px;
        transition: color 0.25s;
        &:hover {
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
  .likes {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
    }
    p {
      font-size: 20px;
    }
    strong {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .mainComments {
    display: flex;
    flex-direction: column;
    padding: 0 30px 20px;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    .description {
      display: flex;
      font-size: 17px;
      margin-bottom: 8px;

      strong {
        margin-right: 5px;
        &:hover {
          cursor: pointer;
        }
        p {
          color: #005;
        }
      }
    }
    .comment {
      display: flex;
      justify-content: space-between;
      font-size: 17px;
      .wrapper {
        display: flex;
        strong {
          margin-right: 5px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      svg {
        stroke: #000;
        stroke-width: 30px;
        color: #fff;
        transition: color 0.25s;
        &:hover {
          color: #000;
          cursor: pointer;
        }
      }
    }
    .timepassed {
      text-transform: uppercase;
      color: #778;
      font-size: 15px;
      margin-top: 10px;
      font-weight: bold;
    }
  }
`;
