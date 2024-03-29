﻿using DataAccessLayer.Abstract;
using DataEntity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace DataAccessLayer.Concrete.EF
{
    public class GenericRepository<T> : RepositoryBase, IRepository<T> where T : class
    {

        private DbSet<T> _objectSet;

        public GenericRepository()
        {


            _objectSet = context.Set<T>();

        }

        public int Delete(T obj)
        {
            _objectSet.Remove(obj);

            return Save();
        }

        public T Find(Expression<Func<T, bool>> where)
        {
            return _objectSet.FirstOrDefault(where);
        }

        public T GetById(int id)
        {
            return _objectSet.Find(id);
        }

        public List<T> List()
        {
            return _objectSet.ToList();
        }

        public List<T> List(Expression<Func<T, bool>> where)
        {
            return _objectSet.Where(where).ToList();
        }

        public IQueryable<T> ListQueryable()
        {
            return _objectSet.AsQueryable<T>();
        }

        public int Save()
        {
            return context.SaveChanges();
        }

        public int Insert(T obj)
        {
            context.Entry(obj).State = EntityState.Added;
            _objectSet.Add(obj);

            return Save();
        }

        public void Update(T obj)
        {
            var entityState = context.Entry(obj).State;
            if (entityState != EntityState.Modified)
            {
                context.Entry(obj).State = entityState = EntityState.Modified;
            }
            context.SaveChanges();
        }
    }
}
