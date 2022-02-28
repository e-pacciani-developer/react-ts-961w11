import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { User } from './types';
import { atomWithObservable } from 'jotai/utils';

class UserService {
  private users$ = new BehaviorSubject<User[]>([]);
  public usersAtom = atomWithObservable(() => this.users$);

  public async getUsers(): Promise<void> {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = result.data;
    this.users$.next(data);
  }

  public async addUser(): Promise<void> {
    const addUserRequest = new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const userCreated: User = {
          name: 'Aldo',
          id: Math.random() * 100,
          company: { name: 'MyComp', bs: '', catchPhrase: '' },
          username: 'myUsername',
        };

        resolve(userCreated);
      }, 2000);
    });

    const newUser: User = await addUserRequest;

    this.users$.next([...this.users$.value, newUser]);
  }

  public async deleteUser(userId: number): Promise<void> {
    const deleteUserRequest = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    await deleteUserRequest;

    this.users$.next(this.users$.value.filter((u) => u.id !== userId));
  }
}

const userServiceInstance = new UserService();

export default userServiceInstance;
