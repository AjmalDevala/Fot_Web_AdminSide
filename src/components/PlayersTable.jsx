import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme/theme";
import { useEffect, useState } from "react";
import Instance from "./config/Instance";

const PlayersTable = () => {
  const theme = useTheme();
  const token = localStorage.getItem("token")

  const colors = tokens(theme.palette.mode);
  const [players, setPlayers] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    Instance.get("/admin/allplayer",{
      headers :{Authorization: `Bearer ${token}`,}

    }).then((response) => {
      setPlayers(response.data.allplayer);
    });
  }, [change]);

  const block = (id) => {
    Instance
      .post(`/admin/blockUser/${id}`,{},{
        headers :{Authorization: `Bearer ${token}`}

      })
      .then(change === true ? setChange(false) : setChange(true));
  };
  const unBlock = (id) => {
    Instance
      .post(`/admin/unBlockUser/${id}`,{},{
        headers :{Authorization: `Bearer ${token}`}

      })
      .then(change === true ? setChange(false) : setChange(true));
  };

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "fullname",
      headerName: "Player",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "status",
    //   headerName: "status",
    //   flex: 1,
    // },
    {
      field: "status",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            params.row.status === "unBlock"
              ? colors.greenAccent[600]
              : colors.redAccent[700]
          }
          borderRadius="4px"
        >
          {params.row.status === "unBlock" && (
            <button
              onClick={() => block(params.row._id)}
              color={colors.grey[100]}
              sx={{ ml: "5px" }}
            > 
              {params.row.status}
            </button>
          )}
          {params.row.status === "Block" && (
            <button
              onClick={() => unBlock(params.row._id)}
              color={colors.grey[100]}
              sx={{ ml: "5px" }}
            >
              {params.row.status}
            </button>
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box
      m="20px"
      sx={{ height: "80vh", overflow: "hidden", overflowY: "scroll" }}
    >
      {/* <Header title="Bookings" subtitle="Manage All Bookings" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={players}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default PlayersTable;
