import React, { useState, useEffect, useContext } from 'react';
import WordCard from '../../components/wordCard';
import {
  StyledSection,
  StyledContainer,
  StyledVideo,
  StyledTitle,
} from '../styled';

import { StyledInner } from './styled';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPaginate from 'react-paginate';
import './styles.css';
import ModalSetup from '../../components/setup';
import { StyledLoader } from '../../components/loader';
import UserContext from 'components/Auth/UserContext';

function Dictionary() {
  const baseUrl = 'https://rslangbe-team105.herokuapp.com/';
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [group, setGroup] = useState(0);
  const [deletedUserWords, setDeletedUserWords] = useState(null);
  const [hardUserWords, setHardUserWords] = useState({});
  const { userInfo } = useContext(UserContext);
  const [pageReload, setPageReload] = useState(false);
  const [isChecked, setIsChecked] = useState({
    wordTranslate: true,
    definitionTranslate: true,
    sentenceTranslate: true,
    transcription: true,
    difficultWords: false,
    deleteWords: false,
  });

  const fetchDataLink = `${baseUrl}words?group=${group}&page=${page.toString()}`;
  const skillLevels = [
    'Beginner',
    'Elementary',
    'Pre-intermediate',
    'Intermediate',
    'Upper-intermediate',
    'Advanced',
  ];

  useEffect(() => {
    const setup = localStorage.getItem('setup');
    if (setup) {
      setIsChecked(JSON.parse(setup));
    }
  }, []);

  useEffect(() => {
    fetch(fetchDataLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    if (userInfo) {
      const filterUrl = `${baseUrl}users/${userInfo['userId']}/aggregatedWords?wordsPerPage=20&filter=`;

      const filterDeletedWords = {
        $and: [
          {
            'userWord.difficulty': group.toString(),
            'userWord.optional.isDeleted': true,
            'userWord.optional.page': page.toString(),
          },
        ],
      };
      const filterHardWords = {
        $and: [
          {
            'userWord.difficulty': group.toString(),
            'userWord.optional.isHard': true,
            'userWord.optional.page': page.toString(),
          },
        ],
      };
      const delWordsUrl = `${filterUrl}${JSON.stringify(filterDeletedWords)}`;

      const hardWordsUrl = `${filterUrl}${JSON.stringify(filterHardWords)}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      fetch(delWordsUrl, options)
        .then((res) => res.json())
        .then(
          (words) => {
            setDeletedUserWords(words);
          },
          (error) => {
            console.log(error.status);
          }
        );
      fetch(hardWordsUrl, options)
        .then((res) => res.json())
        .then(
          (words) => {
            setHardUserWords(words);
          },
          (error) => {
            console.log(error.status);
          }
        );
    }
  }, [fetchDataLink, pageReload, page, isLoaded, userInfo, group]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    const cardsContainer =
      userInfo && !deletedUserWords ? (
        <StyledLoader>Loading...</StyledLoader>
      ) : (
        items.map((item) => {
          let isDel = false;
          let isHard = false;
          let deletedWords, hardWords;
          if (userInfo && Object.keys(deletedUserWords).length > 0) {
            deletedWords = deletedUserWords['0']['paginatedResults'];

            deletedWords.forEach((wordItem) => {
              if (wordItem['_id'] === item.id) isDel = true;
            });
          }
          if (userInfo && Object.keys(hardUserWords).length > 0) {
            hardWords = hardUserWords['0']['paginatedResults'];
            hardWords.forEach((wordItem) => {
              if (wordItem['_id'] === item.id) isHard = true;
            });
          }

          return isDel ? null : (
            <WordCard
              id={item.id}
              card={card}
              isChecked={isChecked}
              setCard={setCard}
              word={item.word}
              transcription={item.transcription}
              translation={item.wordTranslate}
              meaningText={item.textMeaning}
              meaningTextTranslated={item.textMeaningTranslate}
              textExample={item.textExample}
              textExampleTranslated={item.textExampleTranslate}
              imageSrc={baseUrl + item.image}
              wordSoundSrc={item.audio}
              meaningSoundSrc={item.audioMeaning}
              exampleSoundSrc={item.audioExample}
              cardColorStyle={'level-color__' + group}
              wordDifficulty={group}
              pageNumber={page}
              isHard={isHard}
              key={item.word}
              setPageReload={setPageReload}
              pageReload={pageReload}
            />
          );
        })
      );
    return (
      <StyledSection>
        <StyledVideo src="video/video.mp4" autoPlay loop muted />
        <StyledContainer>
          <StyledInner>
            <StyledTitle>Электронный учебник</StyledTitle>
            <ModalSetup setIsChecked={setIsChecked} isChecked={isChecked} />
          </StyledInner>

          <div className="cards__wrapper">
            <Tabs
              onSelect={(index) => {
                setCard(null);
                if (userInfo) setDeletedUserWords(null);
                setGroup(index);
              }}
              selectedTabClassName={'level-color__' + group}
            >
              <div className="tabs-header">
                Сложность - {skillLevels[group]}
              </div>
              <TabList>
                <Tab>1</Tab>
                <Tab>2</Tab>
                <Tab>3</Tab>
                <Tab>4</Tab>
                <Tab>5</Tab>
                <Tab>6</Tab>
              </TabList>
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
              <TabPanel />
            </Tabs>
            <div className="cards">{cardsContainer}</div>
            <div className="pagination">
              <ReactPaginate
                forcePage={page}
                pageCount={30}
                pageRangeDisplayed={2}
                marginPagesDisplayed={3}
                onPageChange={(page) => {
                  setCard(null);
                  if (userInfo) setDeletedUserWords(null);
                  setPage(page.selected);
                }}
              />
            </div>
          </div>
        </StyledContainer>
      </StyledSection>
    );
  }
}

export default Dictionary;
