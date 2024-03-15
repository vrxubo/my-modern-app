import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const getAvatar = (
  users: Array<{ name: string; email: string; archived: boolean }>,
) =>
  users.map(user => ({
    ...user,
    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm', archived: true },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af', archived: true },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr', archived: true },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu', archived: true },
]);

function App() {
  return (
    <div className="container lg mx-auto">
      <ul>
        {mockData.map(({ name, avatar, email, archived }) => (
          <li
            key={name}
            className="flex p-4 items-center border-gray-200 border-b"
          >
            <Avatar>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1 flex justify-between">
              <div className="flex-1">
                <p>{name}</p>
                <p>{email}</p>
              </div>
              <Button size="xs" variant={archived ? 'secondary' : undefined}>
                Archive
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
