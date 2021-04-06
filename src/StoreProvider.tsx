import React, { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import createRootStore from './stores/rootStore';

type RootStoreContext = ReturnType<typeof createRootStore>

const StoreContext = createContext({} as RootStoreContext);

function StoreProvider({ children }: React.PropsWithChildren<{}>) {
  const store = useLocalObservable(createRootStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;

export const useRootStore = () => useContext(StoreContext);

export const useAuthStore = () => {
  const { authStore } = useContext(StoreContext);
  return authStore;
};

export const useMessageStore = () => {
  const { messageStore } = useContext(StoreContext);
  return messageStore;
};

export const useUIStore = () => {
  const { uiStore } = useContext(StoreContext);
  return uiStore;
};

export const useAddVehicleFormStore = () => {
  const { addVehicleFormStore } = useContext(StoreContext);
  return addVehicleFormStore;
};

export const useVehiclesStore = () => {
  const { vehiclesStore } = useContext(StoreContext);
  return vehiclesStore;
};

export const useLoginFormStore = () => {
  const { loginFormStore } = useContext(StoreContext);
  return loginFormStore;
};