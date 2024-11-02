import { useCurrentAccount, useSuiClientQuery } from '@mysten/dapp-kit';

export default function OwnedObjects() {
  const account = useCurrentAccount();

  // account가 존재할 때만 데이터 요청
  const { data } = useSuiClientQuery('getOwnedObjects', {
    owner: account?.address,
  }, { enabled: !!account });

  if (!account) {
    return <p>지갑이 연결되지 않았습니다.</p>;
  }

  return (
    <ul>
      {data && data.data.map((object) => (
        <li key={object.data?.objectId}>{object.data?.objectId}</li>
      ))}
    </ul>
  );
}