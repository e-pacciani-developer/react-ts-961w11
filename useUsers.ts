import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'react';
import { User } from './types';
import UsersService from './users-service';

export function useUsers() {
  const [users] = useAtom(UsersService.usersAtom);

  useEffect(() => {
    if (!users.length) {
      UsersService.getUsers();
    }
  }, []);

  const addUser = useCallback(async () => {
    UsersService.addUser();
  }, []);

  const deleteUser = useCallback((user: User) => {
    const hasConfirmed = confirm('Do yu want to delete ' + user.name + ' ?');

    if (hasConfirmed) {
      UsersService.deleteUser(user.id);
    }
  }, []);

  return { users, addUser, deleteUser };
}
