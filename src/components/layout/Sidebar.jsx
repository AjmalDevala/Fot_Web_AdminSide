import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { tokens } from "../../theme/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const logout =()=>{Navigate('/')};
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FOT-WEB
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* ADMIN */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-admin"
                  width="100px"
                  height="100px"
                  src="data:image/jpeg;base64,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
                  "
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  FOT-WEB
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
                title="Manage Scouts"
                to="/scoutTable"
                icon={<HomeWorkOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            <Item
              title="Manage Players"
              to="/playersTable"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Premium Players"
              to="/PremiumPlayers"
              icon={<PoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <div>

            <button
              title="logout"
              onClick={()=>{
                localStorage.clear()
                window.location.reload()
                Navigate('/')
                selected={selected}
                setSelected={setSelected}
              }}
              ><ApartmentOutlinedIcon />Logout</button>
              </div>
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Payments & Bookings
            </Typography> */}
            {/* <Item
              title="Booking"
              to="/booking"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Others
            </Typography>
            <Item
              title="Coupon"
              to="/coupon"
              icon={<LocalActivityOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar