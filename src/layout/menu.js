import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import AssignmentIcon from '@material-ui/icons/Assignment'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="대시보드"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon/>
      </ListItemIcon>
      <ListItemText primary="쇼핑"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="고객"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon/>
      </ListItemIcon>
      <ListItemText primary="보고서"/>
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>보고서</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="이번달"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="지난 분기"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="매출"/>
    </ListItem>
  </div>
)
