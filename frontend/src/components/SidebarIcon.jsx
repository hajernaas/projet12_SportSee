import PropTypes from "prop-types";
function SidebarIcon({ logo }) {
	return (
		<button className="sidebar__icon-img">
			<img src={logo} alt="" className="sidebar__icon-img-logo" />
		</button>
	);
}

SidebarIcon.propTypes = {
	logo: PropTypes.string,
};

export default SidebarIcon;
