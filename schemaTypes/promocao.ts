import {defineField, defineType} from 'sanity'

export const promocaoType = defineType({
  name: 'Promocao',
  title: 'Promocoes',
  type: 'document',
  fields: [

     defineField({
      name: 'id',
      type: 'number',
      
    }),
    defineField({
      name: 'promoção',
      type: 'image',
    }),

  ],
})