/** @jsx React.DOM */
React.renderComponent(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

var MovieTitle = React.createClass({
	render: function() {
		        return (
            <tr>
                <td>{this.props.movie.movieName}</td>
                <td>{this.props.movie.counter}</td>
            </tr>
        );
	}
});

var MovieTable = React.createClass({
	render: function() {
		var rows = [];
		var lastMovieName = null;
		this.props.movies.forEach(function(movie) {
			if (movie.movieName !== lastMovieName) {
				rows.push(<MovieTitle movie={movie} key={movie.movieName} />);
			}
			lastMovieName = movie.movieName;
		});

		return (
			<table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Times Seen</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
			);
	}
});

var EditableMovieTable = React.createClass({
	render: function() {
		return (
			<div>
				<MovieTable movies={this.props.movies} />
			</div>
		);
	}
});

var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","movieData.json", false);
xmlhttp.send();
console.log(xmlhttp.responseText);
var MOVIES = JSON.parse(xmlhttp.responseText);

React.renderComponent(<EditableMovieTable movies={MOVIES} />, document.body);
