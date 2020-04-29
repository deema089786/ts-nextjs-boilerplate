import React from 'react';
import {
  List, ListItem, ListItemText, Drawer, DrawerProps,
} from '@material-ui/core';
import { Trans, Link } from '../../../../lib/i18n';
import useStyles from './styles';

interface Props extends DrawerProps {}

const Navigation: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Drawer {...props}>
      <List className={classes.root}>
        <Link href="/">
          <ListItem component="a" button>
            <ListItemText>
              <Trans>Main</Trans>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem component="a" button>
            <ListItemText>
              <Trans>About us</Trans>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};
export default Navigation;
