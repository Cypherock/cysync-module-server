import http from '../../utils/http';

const baseURL = '/wallet';

export function addWallet(params: {
  walletName: string;
  coinType: string;
  addresses: string[];
}) {
  return http.post(`${baseURL}/add`, params);
}

export function addAddresses(params: {
  walletName: string;
  coinType: string;
  addresses: string[];
}) {
  return http.post(`${baseURL}/add-address`, params);
}

export function getAddresses(
  params: { walletName: string; coinType: string },
  isRefresh?: boolean
) {
  let url = `${baseURL}/fetch`;

  if (isRefresh) {
    url += '?isRefresh=true';
  }

  return http.post(url, params, {
    key: `BWA-${params.coinType}-${params.walletName}`,
    ttl: 30,
    isRefresh
  });
}

export function getUtxos(
  params: { walletName: string; coinType: string },
  isRefresh?: boolean
) {
  let url = `${baseURL}/fetch-utxos`;

  if (isRefresh) {
    url += '?isRefresh=true';
  }

  return http.post(url, params, {
    key: `BWU-${params.coinType}-${params.walletName}`,
    ttl: 60,
    isRefresh
  });
}

export function getBalance(
  params: { walletName: string; coinType: string },
  isRefresh?: boolean
) {
  let url = `${baseURL}/balance`;

  if (isRefresh) {
    url += '?isRefresh=true';
  }

  return http.post(url, params, {
    key: `BWB-${params.coinType}-${params.walletName}`,
    ttl: 60,
    isRefresh
  });
}
