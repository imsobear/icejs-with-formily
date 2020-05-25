import React from 'react';
import { Input } from '@alifd/next';

// export default () => <><Input /></>

import { Form, FormItem, FormButtonGroup, Submit, Reset } from '@formily/next';
import '@formily/next/esm/style';

export default () => {
  return (
    <Form
      onSubmit={values => {
        console.log(values)
      }}
    >
      <FormItem
        name="name"
        label="Name"
        placeholder="Input Name"
        component={Input}
      />
      <FormButtonGroup>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </Form>
  );
};
