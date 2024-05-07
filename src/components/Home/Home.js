import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import Filter from "../../common/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../utils/redux/jobReducer/jobReducer";
import CommonCard from "../../common/CommonCard/CommonCard";
import { filters } from "../../common/Filter/data";
import CommonLoader from "../../common/Components/CommonLoader/CommonLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) =>
      `calc(100% - ${props?.leftWidth}vmin - ${props?.rightWidth}vmin - 60px)`,
    margin: (props) =>
      `0px ${props?.rightWidth}vmin 0px ${props?.leftWidth}vmin`,
    top: "80px",
    position: "relative",
  },
  wrapper: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
  },
  loader: {
    width: "100%",
    display: "flex",
    flexDirection: "center",
  },
}));

const Home = ({ width }) => {
  const dispatch = useDispatch();
  const classes = useStyles(width);
  const { data, isLoading, isError, pagination, totalCount } = useSelector(
    (state) => state.job,
  );
  const elementRef = useRef(null);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    console.log("hi");
    if (pagination?.offset < totalCount || totalCount === 0) {
      dispatch(
        fetchJobs({ limit: pagination.limit, offset: pagination.offset }),
      );
    }
  }, []);

  function onIntersection(entries) {
    console.log("call");
    const firstEntry = entries[0];
    if (firstEntry?.isIntersecting && pagination?.offset < totalCount) {
      dispatch(
        fetchJobs({
          limit: pagination?.limit,
          offset: pagination?.offset + pagination?.limit,
        }),
      );
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef?.current) {
      observer?.observe(elementRef?.current);
      console.log(elementRef?.current);
    }

    return () => {
      if (observer) {
        observer?.disconnect();
      }
    };
  }, [data]);

  console.log(pagination?.offset, totalCount);

  return (
    <div className={classes?.root}>
      <Filter store={filterData} data={filters} />
      {data?.length === 0 ? (
        <div>No jobs available</div>
      ) : (
        <div className={classes?.wrapper}>
          {data?.map((job, index) => (
            <CommonCard key={index} job={job} />
          ))}
        </div>
      )}
      {pagination?.offset < totalCount && (
        <div ref={elementRef} className={classes?.loader}>
          <CommonLoader />
        </div>
      )}
    </div>
  );
};

export default Home;
