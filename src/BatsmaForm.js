import React from 'react'

export default (props) => {
    return (
        <div className="row">
        <div className="country">
          <form>
            The Country:{" "}
            <input className="country-input" type="text" onChange={props.changeDetails} />
          </form>
        </div>
        <div className="average">The Average: {props.average}</div>
        { props.average === 0 ? <div>--</div> : (
          <div className="horiz-bar" style={{ width: props.width }}>&nbsp;</div>
        )}
      </div>
    )
}