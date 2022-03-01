import React from "react";

export default function FetchMessage (props) {
  const { isFetching, plural } = props
  if (isFetching) {
    return (
      <div style={{ float: 'right' }}>{`Fetching ${plural}...`}</div>
    )
  }
  return <span></span>
}
