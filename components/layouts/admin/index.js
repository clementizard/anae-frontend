import React from 'react';
import Component from './Component';
import DefaultLayout from '../default';

export const getLayout = page => <DefaultLayout><Component>{page}</Component></DefaultLayout>;
export default Component;
