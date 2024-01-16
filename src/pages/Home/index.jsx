import React from "react";
import { useState, useEffect } from "react";

import { callAPI } from "../../domain/api";

import classes from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Navbar from "../../components/Navbar";

const url = "https://restcountries.com/v3.1/all";

const index = () => {
  const [countries, setCountries] = useState([]);

  let response = [];
  const fetchData = async () => {
    response = await fetch(url).then((res) => {
      return res.json();
    });
    setCountries(response);
  };

  const handleSearch = (e) => {
    let name = e.target.value;
    name = name.replace(/[^A-Za-z]/g, "");
    if (name) {
      const fetchSearch = async () => {
        const fetchData = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const response = await fetchData.json();

        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRegion = (e) => {
    setLoading(true);
    const region = e.target.value;
    console.log(region);
    if (region !== "All") {
      const fetchSearch = async () => {
        const fetchData = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const response = await fetchData.json().then(setLoading(false));

        if (response.status !== 404) {
          setCountries(response);
        }
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };


  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Navbar />

      <div className={classes["country-list"]}>
        <div className={classes["container"]}>
          <div className={classes["search"]}>
            <div className={classes["input-search"]}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input onChange={handleSearch} type="text" placeholder="Search for a country..." name="" id="" />
            </div>
            <div className={classes["input-region"]}>
              <form onSubmit={(e) => e.preventDefault()}>
                <select onChange={handleRegion} className={classes["region"]} name="region">
                  <option value="">Filter by Region</option>
                  <option value="All">All</option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </form>
            </div>
          </div>

          <Grid className={classes["card-list-grid"]} container spacing={5} justifyContent="center">
            {countries?.map((country, index) => {
              return (
                <Grid item xs={11} sm={5} md={4} lg={3} variant="elevation">
                  <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardMedia component="img" alt="green iguana" height="140" image={country.flags.png} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name.common}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
            {/* <Grid item xs={11} sm={5} md={4} lg={3} variant="elevation">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="green iguana" height="140" image={FlagGermany} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Germany
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Population: 83,691,570</p>
                    <p>Region: Europe</p>
                    <p>Capital: Berlin</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid> */}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default index;
